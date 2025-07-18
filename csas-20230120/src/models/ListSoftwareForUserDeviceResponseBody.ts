// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwareForUserDeviceResponseBodySoftware extends $dara.Model {
  /**
   * @example
   * Alibaba (China) Network Technology Co.,Ltd.
   */
  inc?: string;
  /**
   * @example
   * 2023-08-18 02:43:02
   */
  installTime?: string;
  name?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      inc: 'Inc',
      installTime: 'InstallTime',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inc: 'string',
      installTime: 'string',
      name: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  software?: ListSoftwareForUserDeviceResponseBodySoftware[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: { 'type': 'array', 'itemType': ListSoftwareForUserDeviceResponseBodySoftware },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.software)) {
      $dara.Model.validateArray(this.software);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

