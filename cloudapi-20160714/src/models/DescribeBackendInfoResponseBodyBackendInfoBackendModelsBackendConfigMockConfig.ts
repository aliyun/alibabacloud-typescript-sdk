// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders";


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig extends $dara.Model {
  /**
   * @remarks
   * The header in the mocked response.
   */
  mockHeaders?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders[];
  /**
   * @remarks
   * The mocked response.
   * 
   * @example
   * test
   */
  mockResult?: string;
  /**
   * @remarks
   * The status code in the mocked response.
   * 
   * @example
   * 200
   */
  mockStatusCode?: string;
  static names(): { [key: string]: string } {
    return {
      mockHeaders: 'MockHeaders',
      mockResult: 'MockResult',
      mockStatusCode: 'MockStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockHeaders: { 'type': 'array', 'itemType': DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfigMockHeaders },
      mockResult: 'string',
      mockStatusCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mockHeaders)) {
      $dara.Model.validateArray(this.mockHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

