// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePopApiResponseBodyOpenApiMetaList extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
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
   * - **true**: required.
   * 
   * - **false**: not required.
   * 
   * @example
   * false
   */
  required?: boolean;
  /**
   * @remarks
   * The serialization method for an array parameter. Valid values:
   * 
   * - **repeatList**: An array is serialized in the XXX.N format. Example: Instance.1=i-instance1&\\&Instance.2=i-instance2.
   * 
   * - **simple**: An array is serialized as a comma-separated string. Example: i-instance1,i-instance2.
   * 
   * - **spaceDelimited**: An array is serialized as a space-separated string. Example: i-instance1 i-instance2.
   * 
   * - **pipeDelimited**: An array is serialized as a pipe-separated string. Example: i-instance1|i-instance2.
   * 
   * - **json**: An array is serialized in JSON format. Example: ["i-instance1","i-instance2"].
   * 
   * - **flat**: An array is serialized in the XXX.N format. Example: Instance.1=i-instance1\\&Instance.2=i-instance2.
   * 
   * @example
   * json
   */
  style?: string;
  /**
   * @remarks
   * The data type of the parameter. Valid values:
   * 
   * - **string**: a string.
   * 
   * - **boolean**: a Boolean value.
   * 
   * - **integer**: an integer.
   * 
   * - **long**: a long integer.
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
   * List of API information.
   */
  openApiMetaList?: DescribePopApiResponseBodyOpenApiMetaList[];
  /**
   * @remarks
   * The POP code of the Alibaba Cloud product API.
   * 
   * @example
   * Sas
   */
  popCode?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this unique ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * 1A01B0BA-****-5813-****-A5DA15FA95AE
   */
  requestId?: string;
  /**
   * @remarks
   * The version number of the API.
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

