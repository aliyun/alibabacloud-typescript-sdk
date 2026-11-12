// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotInputResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * project
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * demo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotInput extends $dara.Model {
  /**
   * @remarks
   * The snapshot name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTags?: CreateSnapshotInputResourceTags[];
  /**
   * @remarks
   * The source sandbox ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sbx-****
   */
  sandboxID?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 70d1****abcd
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      resourceTags: 'resourceTags',
      sandboxID: 'sandboxID',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourceTags: { 'type': 'array', 'itemType': CreateSnapshotInputResourceTags },
      sandboxID: 'string',
      teamID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

