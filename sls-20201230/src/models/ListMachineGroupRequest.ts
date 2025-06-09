// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the machine group. This parameter is used to filter machine groups. Partial match is supported.
   * 
   * @example
   * test-machine-group
   */
  groupName?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

