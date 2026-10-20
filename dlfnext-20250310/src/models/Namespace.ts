// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Namespace extends $dara.Model {
  /**
   * @remarks
   * The creation time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741266704867
   */
  createdAt?: number;
  /**
   * @remarks
   * The user who created the namespace.
   * 
   * @example
   * acs:ram:1234567:root
   */
  createdBy?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * namespace_id
   */
  id?: string;
  /**
   * @remarks
   * The storage path of the namespace.
   * 
   * @example
   * oss://example-bucket/example-namespace/
   */
  location?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The extension options for the namespace.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The namespace owner.
   * 
   * @example
   * acs:ram:1234567:root
   */
  owner?: string;
  /**
   * @remarks
   * The update time, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741266704867
   */
  updatedAt?: number;
  /**
   * @remarks
   * The user who updated the namespace.
   * 
   * @example
   * acs:ram:1045689747920334:root
   */
  updatedBy?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      id: 'id',
      location: 'location',
      name: 'name',
      options: 'options',
      owner: 'owner',
      updatedAt: 'updatedAt',
      updatedBy: 'updatedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      createdBy: 'string',
      id: 'string',
      location: 'string',
      name: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      owner: 'string',
      updatedAt: 'number',
      updatedBy: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

