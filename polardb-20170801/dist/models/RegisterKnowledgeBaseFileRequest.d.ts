import * as $dara from '@darabonba/typescript';
export declare class RegisterKnowledgeBaseFileRequest extends $dara.Model {
    /**
     * @remarks
     * The OSS object key of the uploaded file, excluding the oss://BucketName/ prefix.
     *
     * > Before calling this operation, upload the target file to OSS.
     *
     * This parameter is required.
     *
     * @example
     * pks-2ze123456789abcd/pkb-2ze123456789abcd/example.pdf
     */
    filePath?: string;
    /**
     * @remarks
     * The ID of the knowledge base. Create a knowledge space first, then create a knowledge base, and obtain this ID from the creation result.
     *
     * This parameter is required.
     *
     * @example
     * pkb-2ze123456789abcd
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The region ID of the knowledge base.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
