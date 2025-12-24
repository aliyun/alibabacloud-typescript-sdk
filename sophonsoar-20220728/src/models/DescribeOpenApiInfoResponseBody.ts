// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenApiInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the API operation.
   * 
   * @example
   * describeEcs
   */
  description?: string;
  /**
   * @remarks
   * The input parameters of the API operation.
   * 
   * @example
   * {}
   */
  inputParams?: string;
  /**
   * @remarks
   * The output parameters of the API operation.
   * 
   * @example
   * []
   */
  outputParams?: string;
  /**
   * @remarks
   * The sample response parameters.
   * 
   * @example
   * []
   */
  responseDemo?: string;
  /**
   * @remarks
   * The summary of the API operation.
   * 
   * @example
   * describeEcs
   */
  summary?: string;
  /**
   * @remarks
   * The title of the API operation.
   * 
   * @example
   * describeEcs
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      inputParams: 'InputParams',
      outputParams: 'OutputParams',
      responseDemo: 'ResponseDemo',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      inputParams: 'string',
      outputParams: 'string',
      responseDemo: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenApiInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeOpenApiInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 358E012F-B516-599D-9ED0-A1A361CDE615
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
      data: DescribeOpenApiInfoResponseBodyData,
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

