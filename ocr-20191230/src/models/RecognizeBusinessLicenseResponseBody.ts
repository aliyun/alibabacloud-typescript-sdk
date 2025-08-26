// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeBusinessLicenseResponseBodyDataEmblem extends $dara.Model {
  /**
   * @example
   * 163
   */
  height?: number;
  /**
   * @example
   * 366
   */
  left?: number;
  /**
   * @example
   * 8
   */
  top?: number;
  /**
   * @example
   * 162
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataQRCode extends $dara.Model {
  /**
   * @example
   * 132
   */
  height?: number;
  /**
   * @example
   * 156
   */
  left?: number;
  /**
   * @example
   * 914
   */
  top?: number;
  /**
   * @example
   * 126
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataStamp extends $dara.Model {
  /**
   * @example
   * 154
   */
  height?: number;
  /**
   * @example
   * 650
   */
  left?: number;
  /**
   * @example
   * 1030
   */
  top?: number;
  /**
   * @example
   * 154
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyDataTitle extends $dara.Model {
  /**
   * @example
   * 10
   */
  height?: number;
  /**
   * @example
   * 10
   */
  left?: number;
  /**
   * @example
   * 10
   */
  top?: number;
  /**
   * @example
   * 10
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBodyData extends $dara.Model {
  address?: string;
  /**
   * @example
   * 0
   */
  angle?: number;
  business?: string;
  capital?: string;
  emblem?: RecognizeBusinessLicenseResponseBodyDataEmblem;
  /**
   * @example
   * 20150504
   */
  establishDate?: string;
  legalPerson?: string;
  name?: string;
  QRCode?: RecognizeBusinessLicenseResponseBodyDataQRCode;
  /**
   * @example
   * 91500108320423****
   */
  registerNumber?: string;
  stamp?: RecognizeBusinessLicenseResponseBodyDataStamp;
  title?: RecognizeBusinessLicenseResponseBodyDataTitle;
  type?: string;
  /**
   * @example
   * 29991231
   */
  validPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      angle: 'Angle',
      business: 'Business',
      capital: 'Capital',
      emblem: 'Emblem',
      establishDate: 'EstablishDate',
      legalPerson: 'LegalPerson',
      name: 'Name',
      QRCode: 'QRCode',
      registerNumber: 'RegisterNumber',
      stamp: 'Stamp',
      title: 'Title',
      type: 'Type',
      validPeriod: 'ValidPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      angle: 'number',
      business: 'string',
      capital: 'string',
      emblem: RecognizeBusinessLicenseResponseBodyDataEmblem,
      establishDate: 'string',
      legalPerson: 'string',
      name: 'string',
      QRCode: RecognizeBusinessLicenseResponseBodyDataQRCode,
      registerNumber: 'string',
      stamp: RecognizeBusinessLicenseResponseBodyDataStamp,
      title: RecognizeBusinessLicenseResponseBodyDataTitle,
      type: 'string',
      validPeriod: 'string',
    };
  }

  validate() {
    if(this.emblem && typeof (this.emblem as any).validate === 'function') {
      (this.emblem as any).validate();
    }
    if(this.QRCode && typeof (this.QRCode as any).validate === 'function') {
      (this.QRCode as any).validate();
    }
    if(this.stamp && typeof (this.stamp as any).validate === 'function') {
      (this.stamp as any).validate();
    }
    if(this.title && typeof (this.title as any).validate === 'function') {
      (this.title as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBusinessLicenseResponseBody extends $dara.Model {
  data?: RecognizeBusinessLicenseResponseBodyData;
  /**
   * @example
   * F34D031B-02BD-4A59-BA35-EE068DD6F6E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeBusinessLicenseResponseBodyData,
      requestId: 'string',
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

