// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationServerlessConfResponseBodyServerlessConfItems extends $dara.Model {
  /**
   * @example
   * gateway
   */
  componentType?: string;
  /**
   * @example
   * 16
   */
  scaleMax?: string;
  /**
   * @example
   * 1
   */
  scaleMin?: string;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationServerlessConfResponseBody extends $dara.Model {
  /**
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  serverlessConfItems?: DescribeApplicationServerlessConfResponseBodyServerlessConfItems[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      requestId: 'RequestId',
      serverlessConfItems: 'ServerlessConfItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      requestId: 'string',
      serverlessConfItems: { 'type': 'array', 'itemType': DescribeApplicationServerlessConfResponseBodyServerlessConfItems },
    };
  }

  validate() {
    if(Array.isArray(this.serverlessConfItems)) {
      $dara.Model.validateArray(this.serverlessConfItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

