// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupIdByGroupNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the asset group.
   * 
   * This parameter is required.
   * 
   * @example
   * TestGroupName
   */
  groupName?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 10.12.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

