// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCanTrySasResponseBodyDataBodyData extends $dara.Model {
  canTry?: number;
  canTryVersions?: number[];
  tryType?: number;
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      canTryVersions: 'CanTryVersions',
      tryType: 'TryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'number',
      canTryVersions: { 'type': 'array', 'itemType': 'number' },
      tryType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.canTryVersions)) {
      $dara.Model.validateArray(this.canTryVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCanTrySasResponseBodyDataBody extends $dara.Model {
  data?: GetCanTrySasResponseBodyDataBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCanTrySasResponseBodyDataBodyData,
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

export class GetCanTrySasResponseBodyData extends $dara.Model {
  body?: GetCanTrySasResponseBodyDataBody;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetCanTrySasResponseBodyDataBody,
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

export class GetCanTrySasResponseBody extends $dara.Model {
  code?: string;
  data?: GetCanTrySasResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCanTrySasResponseBodyData,
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

