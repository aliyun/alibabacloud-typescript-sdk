// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddEntriesToAclRequestAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the ACL entry. The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * You can add at most 20 entries in each call.
   * 
   * @example
   * test-entry
   */
  description?: string;
  /**
   * @remarks
   * The CIDR block in the ACL entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.1.0/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

