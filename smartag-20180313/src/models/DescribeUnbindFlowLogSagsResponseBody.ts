// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUnbindFlowLogSagsResponseBodySagsSag extends $dara.Model {
  description?: string;
  name?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBodySags extends $dara.Model {
  sag?: DescribeUnbindFlowLogSagsResponseBodySagsSag[];
  static names(): { [key: string]: string } {
    return {
      sag: 'Sag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sag: { 'type': 'array', 'itemType': DescribeUnbindFlowLogSagsResponseBodySagsSag },
    };
  }

  validate() {
    if(Array.isArray(this.sag)) {
      $dara.Model.validateArray(this.sag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUnbindFlowLogSagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of the SAG instances.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C850C10E-9856-45FF-8640-80288BA467DF
   */
  requestId?: string;
  sags?: DescribeUnbindFlowLogSagsResponseBodySags;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      sags: 'Sags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      sags: DescribeUnbindFlowLogSagsResponseBodySags,
    };
  }

  validate() {
    if(this.sags && typeof (this.sags as any).validate === 'function') {
      (this.sags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

