// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow anonymous access. 
   * 
   * - true: Anonymous access is allowed.
   * 
   * - false (default): Anonymous access is not allowed.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  enableAnonymousAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable encryption in transit.
   * 
   * - true: Encryption in transit is enabled.
   * 
   * - false (default): Encryption in transit is not enabled.
   * 
   * @example
   * false
   */
  encryptData?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The home folder path for each user. The file path format is as follows:
   * 
   * - Use a forward slash (/) or backslash (\\) as the separator.
   * 
   * - Each segment cannot contain `<>":|?*`.
   * 
   * - The length of each segment ranges from 0 to 255.
   * 
   * - The total length ranges from 0 to 32767.
   * 
   * For example, if the user folder is `/home`, the file system performs automatic creation of the `/home/A` folder when user A performs logon. If `/home/A` already exists, this step is skipped.
   * 
   * > User A must have the permission to create folders. Otherwise, the `/home/A` folder cannot be created.
   * 
   * @example
   * /home
   */
  homeDirPath?: string;
  /**
   * @remarks
   * The Base64-encoded string of the keytab file content.
   * 
   * @example
   * BQIAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAQAIqIx6v7p11oUAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAwAIqIx6v7p11oUAAABPAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAFwAQnQZWB3RAPHU7PMIJyBWePAAAAF8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQASACAGJ7F0s+bcBjf6jD5HlvlRLmPSOW+qDZe0Qk0lQcf8WwAAAE8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQARABDdFmanrSIatnDDh****
   */
  keytab?: string;
  /**
   * @remarks
   * The MD5-encrypted string of the keytab file content.
   * 
   * @example
   * E3CCF7E2416DF04FA958AA4513EA****
   */
  keytabMd5?: string;
  /**
   * @remarks
   * Specifies whether to reject unencrypted clients.
   * 
   * - true: Unencrypted clients are rejected.
   * 
   * - false (default): Unencrypted clients are not rejected.
   * 
   * @example
   * false
   */
  rejectUnencryptedAccess?: boolean;
  /**
   * @remarks
   * The ID of the superuser. The ID must follow these rules:
   * 
   * - Must start with `S`, and no other letters are allowed after the initial S.
   * 
   * - Must contain at least three hyphens (-) as separators.
   * 
   * For example, `S-1-5-22` or `S-1-5-22-23`.
   * 
   * @example
   * S-1-5-22
   */
  superAdminSid?: string;
  static names(): { [key: string]: string } {
    return {
      enableAnonymousAccess: 'EnableAnonymousAccess',
      encryptData: 'EncryptData',
      fileSystemId: 'FileSystemId',
      homeDirPath: 'HomeDirPath',
      keytab: 'Keytab',
      keytabMd5: 'KeytabMd5',
      rejectUnencryptedAccess: 'RejectUnencryptedAccess',
      superAdminSid: 'SuperAdminSid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAnonymousAccess: 'boolean',
      encryptData: 'boolean',
      fileSystemId: 'string',
      homeDirPath: 'string',
      keytab: 'string',
      keytabMd5: 'string',
      rejectUnencryptedAccess: 'boolean',
      superAdminSid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

