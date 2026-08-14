// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortRequest extends $dara.Model {
  frontendPort?: number;
  frontendProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      frontendPort: 'FrontendPort',
      frontendProtocol: 'FrontendProtocol',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontendPort: 'number',
      frontendProtocol: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

