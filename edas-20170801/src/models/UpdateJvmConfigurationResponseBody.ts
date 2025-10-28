// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJvmConfigurationResponseBodyJvmConfiguration extends $dara.Model {
  /**
   * @remarks
   * The maximum size of the heap memory. Unit: MB.
   * 
   * @example
   * 500
   */
  maxHeapSize?: number;
  /**
   * @remarks
   * The size of the permanent generation heap memory. Unit: MB.
   * 
   * @example
   * 1000
   */
  maxPermSize?: number;
  /**
   * @remarks
   * The initial size of the heap memory. Unit: MB.
   * 
   * @example
   * 500
   */
  minHeapSize?: number;
  /**
   * @remarks
   * The optional parameters.
   * 
   * @example
   * ”“
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      maxHeapSize: 'MaxHeapSize',
      maxPermSize: 'MaxPermSize',
      minHeapSize: 'MinHeapSize',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxHeapSize: 'number',
      maxPermSize: 'number',
      minHeapSize: 'number',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJvmConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The settings of the JVM parameters.
   */
  jvmConfiguration?: UpdateJvmConfigurationResponseBodyJvmConfiguration;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-********************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jvmConfiguration: 'JvmConfiguration',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      jvmConfiguration: UpdateJvmConfigurationResponseBodyJvmConfiguration,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.jvmConfiguration && typeof (this.jvmConfiguration as any).validate === 'function') {
      (this.jvmConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

