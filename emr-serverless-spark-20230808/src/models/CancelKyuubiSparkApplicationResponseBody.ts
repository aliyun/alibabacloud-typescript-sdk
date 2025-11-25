// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelKyuubiSparkApplicationResponseBodyBody extends $dara.Model {
  /**
   * @example
   * spark-339f844005b6404c95f9f7c7a13b****
   */
  applicationId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'applicationId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKyuubiSparkApplicationResponseBody extends $dara.Model {
  body?: CancelKyuubiSparkApplicationResponseBodyBody;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CancelKyuubiSparkApplicationResponseBodyBody,
      requestId: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

