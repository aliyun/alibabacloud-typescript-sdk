import * as $dara from '@darabonba/typescript';
export declare class GetDefaultDomainResponseBody extends $dara.Model {
    /**
     * @remarks
     * The default domain name.
     *
     * @example
     * examplecompany.onaliyun.com
     */
    defaultDomainName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 66815255-7CCE-4759-AC37-9755794C3626
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
