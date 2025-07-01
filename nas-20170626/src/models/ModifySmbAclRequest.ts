// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmbAclRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow anonymous access. Valid values:
   * 
   * *   true: The file system allows anonymous access.
   * *   false (default): The file system denies anonymous access.
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
   * Specifies whether to enable encryption in transit. Valid values:
   * 
   * *   true: enables encryption in transit.
   * *   false (default): disables encryption in transit.
   * 
   * @example
   * false
   */
  encryptData?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The home directory of each user. Each user-specific home directory must meet the following requirements:
   * 
   * *   Each segment starts with a forward slash (/) or a backward slash (\\\\).
   * *   Each segment does not contain the following special characters: `<>":|?*`.
   * *   Each segment is 0 to 255 characters in length.
   * *   The total length is 0 to 32,767 characters.
   * 
   * For example, if you create a user named A and the home directory is `/home`, the file system automatically creates a directory named `/home/A` when User A logs on to the file system. If the `/home/A` directory already exists, the file system does not create the directory.
   * 
   * > User A must have the permissions to create folders in the \\home directory. Otherwise, the file system cannot create the `/home/A` directory when User A logs on to the file system.
   * 
   * @example
   * /home
   */
  homeDirPath?: string;
  /**
   * @remarks
   * The string that is generated after the system encodes the keytab file by using Base64.
   * 
   * @example
   * BQIAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAQAIqIx6v7p11oUAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAwAIqIx6v7p11oUAAABPAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAFwAQnQZWB3RAPHU7PMIJyBWePAAAAF8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQASACAGJ7F0s+bcBjf6jD5HlvlRLmPSOW+qDZe0Qk0lQcf8WwAAAE8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQARABDdFmanrSIatnDDh****
   */
  keytab?: string;
  /**
   * @remarks
   * The string that is generated after the system encodes the keytab file by using MD5.
   * 
   * @example
   * E3CCF7E2416DF04FA958AA4513EA****
   */
  keytabMd5?: string;
  /**
   * @remarks
   * Specifies whether to deny access from non-encrypted clients. Valid values:
   * 
   * *   true: The file system denies access from non-encrypted clients.
   * *   false (default): The file system allows access from non-encrypted clients.
   * 
   * @example
   * false
   */
  rejectUnencryptedAccess?: boolean;
  /**
   * @remarks
   * The ID of a super admin. The ID must meet the following requirements:
   * 
   * *   The ID starts with `S` and does not contain letters except S.
   * *   The ID contains at least three hyphens (-) as delimiters.
   * 
   * Examples: `S-1-5-22` and `S-1-5-22-23`.
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

