import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableCrossRegionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of regions available for cross-region backup.
     *
     * @example
     * [\\"cn-beijing\\", \\"cn-shanghai\\", \\"cn-qingdao\\", \\"cn-shenzhen\\", \\"cn-hongkong\\"]
     */
    regions?: string[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D685D479-B36E-52B9-98FF-8402EA01F***
     */
    requestId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
