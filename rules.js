var conditions = {
    any: [
        {
            any: [
                {
                    all: [
                    ]
                },
                {
                    fact: 'f1',
                    operator: 'equal',
                    value: 1
                },
                {
                    any: [
                        {
                            fact: 'f1',
                            operator: 'equal',
                            value: 3
                        },
                        {
                            fact: 'f2',
                            operator: 'equal',
                            value: 4
                        }
                    ]
                }

            ]
        },
        {
            any: [
                {
                    all: [
                        {
                            fact: 'f1',
                            operator: 'equal',
                            value: 1
                        },
                        {
                            fact: 'f2',
                            operator: 'equal',
                            value: 2
                        }
                    ]
                },
                {
                    any: [
                        {
                            fact: 'f1',
                            operator: 'equal',
                            value: 3
                        },
                        {
                            fact: 'f2',
                            operator: 'equal',
                            value: 4
                        }
                    ]
                }

            ]
        }
    ]
}