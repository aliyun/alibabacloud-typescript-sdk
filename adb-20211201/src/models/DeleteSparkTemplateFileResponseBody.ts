// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSparkTemplateFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the template file is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
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

export class DeleteSparkTemplateFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion result.
   */
  data?: DeleteSparkTemplateFileResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
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
      data: DeleteSparkTemplateFileResponseBodyData,
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

