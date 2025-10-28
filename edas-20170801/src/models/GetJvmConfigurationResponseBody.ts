// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJvmConfigurationResponseBodyJvmConfiguration extends $dara.Model {
  /**
   * @remarks
   * The maximum size of the heap memory. Unit: MB.
   * 
   * @example
   * 1000
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
   * The custom parameter.
   * 
   * @example
   * -XX:+UseConcMarkSweepGC -XX:-UseParNewGC
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

export class GetJvmConfigurationResponseBody extends $dara.Model {
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
   * The JVM configuration of the application or instance group.
   */
  jvmConfiguration?: GetJvmConfigurationResponseBodyJvmConfiguration;
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
   * 3F43-F34V-0VCD***********
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
      jvmConfiguration: GetJvmConfigurationResponseBodyJvmConfiguration,
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

