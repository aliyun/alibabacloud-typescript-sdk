// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PluginAnalysisResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The plug-in description.
   * 
   * @example
   * plugin description
   */
  description?: string;
  /**
   * @remarks
   * The plug-in version.
   * 
   * @example
   * 8.17.0
   */
  elasticsearchVersion?: string;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * plugin_name
   */
  name?: string;
  /**
   * @remarks
   * The security policy of the plug-in.
   * 
   * @example
   * null
   */
  securityPolicy?: string;
  /**
   * @remarks
   * The plug-in version.
   * 
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
  /**
   * @remarks
   * The returned result.
   */
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

