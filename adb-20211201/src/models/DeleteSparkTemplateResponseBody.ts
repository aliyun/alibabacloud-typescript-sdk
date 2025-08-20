// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSparkTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DeleteSparkTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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
      data: DeleteSparkTemplateResponseBodyData,
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

