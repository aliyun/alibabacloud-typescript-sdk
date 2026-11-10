// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
      sandboxID: 'sandboxID',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sandboxID: 'string',
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

