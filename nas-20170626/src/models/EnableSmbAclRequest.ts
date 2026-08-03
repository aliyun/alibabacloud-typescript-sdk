// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The Base64-encoded content of the Keytab file. When using Kerberos authentication mode (default mode), the Keytab parameter is required.
   * 
   * @example
   * BQIAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAQAIqIx6v7p11oUAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAwAIqIx6v7p11oUAAABPAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAFwAQnQZWB3RAPHU7PMIJyBWePAAAAF8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQASACAGJ7F0s+bcBjf6jD5HlvlRLmPSOW+qDZe0Qk0lQcf8WwAAAE8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQARABDdFmanrSIatnDDhxxxxx
   */
  keytab?: string;
  /**
   * @remarks
   * The MD5-encrypted string of the Keytab file content.
   * 
   * @example
   * E3CCF7E2416DF04FA958AA4513EAxxxx
   */
  keytabMd5?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      keytab: 'Keytab',
      keytabMd5: 'KeytabMd5',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      keytab: 'string',
      keytabMd5: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

