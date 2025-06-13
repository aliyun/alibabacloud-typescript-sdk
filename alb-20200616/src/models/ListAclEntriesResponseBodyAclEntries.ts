// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAclEntriesResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the ACL entry. The description must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * test-entry
   */
  description?: string;
  /**
   * @remarks
   * The CIDR block for the ACL entry.
   * 
   * @example
   * 10.0.1.1/24
   */
  entry?: string;
  /**
   * @remarks
   * The status of the ACL entry. Valid values:
   * 
   * *   **Adding**: The ACL entry is being added.
   * *   **Available**: The ACL entry is added and available.
   * *   **Removing**: The ACL entry is being removed.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

