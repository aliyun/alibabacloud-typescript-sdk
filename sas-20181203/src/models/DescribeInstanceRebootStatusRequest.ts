// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRebootStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The UUIDs of the servers that you restart. Separate multiple UUIDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * d77f7802-4f0a-4221-ab02-4d999e****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

