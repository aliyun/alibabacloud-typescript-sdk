import * as $dara from '@darabonba/typescript';
export declare class OssUploadCredential extends $dara.Model {
    accessKeyId?: string;
    endpoint?: string;
    filePath?: string;
    ossPolicy?: string;
    ossSignature?: string;
    stsToken?: string;
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
