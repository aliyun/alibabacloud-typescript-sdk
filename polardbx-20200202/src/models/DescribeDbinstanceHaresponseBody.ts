// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceHAResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the primary node.
   * 
   * @example
   * cn-hangzhou-d
   */
  primaryAzoneId?: string;
  /**
   * @remarks
   * The region ID of the primary node.
   * 
   * @example
   * cn-hangzhou
   */
  primaryRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary node.
   * 
   * @example
   * cn-hangzhou-b
   */
  secondaryAzoneId?: string;
  /**
   * @remarks
   * The region ID of the secondary node.
   * 
   * @example
   * cn-hangzhou
   */
  secondaryRegionId?: string;
  /**
   * @remarks
   * The high availability topology type of the instance.
   * 
   * @example
   * 3azones
   */
  topologyType?: string;
  static names(): { [key: string]: string } {
    return {
      primaryAzoneId: 'PrimaryAzoneId',
      primaryRegionId: 'PrimaryRegionId',
      secondaryAzoneId: 'SecondaryAzoneId',
      secondaryRegionId: 'SecondaryRegionId',
      topologyType: 'TopologyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryAzoneId: 'string',
      primaryRegionId: 'string',
      secondaryAzoneId: 'string',
      secondaryRegionId: 'string',
      topologyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAResponseBody extends $dara.Model {
  /**
   * @remarks
   * The high availability deployment information of the instance.
   */
  data?: DescribeDBInstanceHAResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successs
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceHAResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

