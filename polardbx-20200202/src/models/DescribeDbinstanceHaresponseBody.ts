// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceHAResponseBodyData extends $dara.Model {
  primaryAzoneId?: string;
  primaryRegionId?: string;
  secondaryAzoneId?: string;
  secondaryRegionId?: string;
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
  data?: DescribeDBInstanceHAResponseBodyData;
  message?: string;
  requestId?: string;
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

