// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiStatisticsPathField } from "./AiStatisticsPathField";


export class AiStatisticsConfigPathFieldConfigs extends $dara.Model {
  /**
   * @remarks
   * The AI request log field configuration groups corresponding to the API path, passed as a map. The valid keys for the map are fixed to basic and custom, and the values are arrays of log field configurations for the corresponding groups. basic indicates basic log fields, and custom indicates custom log fields. For the current API path, fieldPaths represents the complete desired state of the field configuration. Incremental appending or diff merging is not supported.
   * 
   * If pathFieldConfigs is not passed, is passed as null, or is passed as an empty array, the existing log field configurations are not updated. If a non-empty array is passed, a desired state replacement is performed based on the complete set of paths in the request, and historical path configurations not included in the request are deleted.
   * 
   * For example, to add a custom field named test to the /v1/chat/completions API path based on the existing configuration, the caller must use the read-merge-full write-back approach:
   * 1. Read all current path configurations.
   * 2. Retain the current complete basic and custom arrays for the target API path /v1/chat/completions.
   * 3. Append test to the current custom array.
   * 4. Retain the configurations for other API paths as they are.
   * 5. Submit the merged and complete pathFieldConfigs.
   */
  fieldPaths?: { [key: string]: AiStatisticsPathField };
  /**
   * @remarks
   * The API path.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPaths: 'fieldPaths',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPaths: { 'type': 'map', 'keyType': 'string', 'valueType': AiStatisticsPathField },
      path: 'string',
    };
  }

  validate() {
    if(this.fieldPaths) {
      $dara.Model.validateMap(this.fieldPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStatisticsConfig extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to record the request content (controls whether question-related attributes are generated). This field is deprecated in new versions.
   * 
   * @example
   * true
   */
  logRequestContent?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to record the response content (controls whether answer-related attributes are generated). This field is deprecated in new versions.
   * 
   * @example
   * true
   */
  logResponseContent?: boolean;
  /**
   * @remarks
   * The list of AI request log field collection configurations, configured by API path.
   */
  pathFieldConfigs?: AiStatisticsConfigPathFieldConfigs[];
  static names(): { [key: string]: string } {
    return {
      logRequestContent: 'logRequestContent',
      logResponseContent: 'logResponseContent',
      pathFieldConfigs: 'pathFieldConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRequestContent: 'boolean',
      logResponseContent: 'boolean',
      pathFieldConfigs: { 'type': 'array', 'itemType': AiStatisticsConfigPathFieldConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.pathFieldConfigs)) {
      $dara.Model.validateArray(this.pathFieldConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

