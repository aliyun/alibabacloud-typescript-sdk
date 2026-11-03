// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSignatureLibVersionResponseBodyVersion extends $dara.Model {
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ips
   */
  type?: string;
  /**
   * @remarks
   * The update time of the signature library version. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1741067915
   */
  updateTime?: number;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * IPS-2307-02
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      updateTime: 'UpdateTime',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      updateTime: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignatureLibVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C50C2A9-4BBB-5504-8ADA-C41A79B8C946
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The version information.
   */
  version?: DescribeSignatureLibVersionResponseBodyVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      version: { 'type': 'array', 'itemType': DescribeSignatureLibVersionResponseBodyVersion },
    };
  }

  validate() {
    if(Array.isArray(this.version)) {
      $dara.Model.validateArray(this.version);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

