// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePopApiResponseBodyOpenApiMetaList extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * demo parameter
   */
  description?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * 12.xx.xx.xx
   */
  exampleValue?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * DescribePopApi
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  required?: boolean;
  style?: string;
  /**
   * @remarks
   * The data type of the parameter field. Valid values:
   * 
   * *   **string**
   * *   **boolean**
   * *   **integer**
   * *   **long**
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      exampleValue: 'ExampleValue',
      name: 'Name',
      required: 'Required',
      style: 'Style',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exampleValue: 'string',
      name: 'string',
      required: 'boolean',
      style: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePopApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * AddAssetCleanConfig
   */
  apiName?: string;
  /**
   * @remarks
   * The information about the API.
   */
  openApiMetaList?: DescribePopApiResponseBodyOpenApiMetaList[];
  /**
   * @remarks
   * The POP code of the Alibaba Cloud service.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A01B0BA-CFC4-5813-9EB0-A5DA15FA95AE
   */
  requestId?: string;
  /**
   * @remarks
   * The version of the API.
   * 
   * @example
   * 2019-09-10
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      openApiMetaList: 'OpenApiMetaList',
      popCode: 'PopCode',
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      openApiMetaList: { 'type': 'array', 'itemType': DescribePopApiResponseBodyOpenApiMetaList },
      popCode: 'string',
      requestId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.openApiMetaList)) {
      $dara.Model.validateArray(this.openApiMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

