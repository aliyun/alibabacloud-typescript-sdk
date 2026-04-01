// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PluginAnalysisResponseBodyResult extends $dara.Model {
  /**
   * @example
   * plugin description
   */
  description?: string;
  /**
   * @example
   * 8.17.0
   */
  elasticsearchVersion?: string;
  /**
   * @example
   * plugin_name
   */
  name?: string;
  /**
   * @example
   * null
   */
  securityPolicy?: string;
  /**
   * @example
   * 8.17.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      elasticsearchVersion: 'elasticsearchVersion',
      name: 'name',
      securityPolicy: 'securityPolicy',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      elasticsearchVersion: 'string',
      name: 'string',
      securityPolicy: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PluginAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  result?: PluginAnalysisResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': PluginAnalysisResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

