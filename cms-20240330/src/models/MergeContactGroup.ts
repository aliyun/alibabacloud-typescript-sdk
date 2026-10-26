// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContactGroup extends $dara.Model {
  /**
   * @remarks
   * The list of unique identifiers for members in the group.
   */
  contacts?: string[];
  /**
   * @remarks
   * The extension field used to store additional information.
   * 
   * @example
   * { "department": "O&M Department", "role": "Engineer" }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier of the contact group.
   * 
   * @example
   * group-12345
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the contact group.
   * 
   * @example
   * O&M Team
   */
  name?: string;
  /**
   * @remarks
   * The source system of the contact group.
   * 
   * @example
   * dingtalk
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

