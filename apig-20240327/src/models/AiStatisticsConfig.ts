// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiStatisticsPathField } from "./AiStatisticsPathField";


export class AiStatisticsConfigPathFieldConfigs extends $dara.Model {
  /**
   * @remarks
   * A key-value map for extracting fields. Keys are custom names, and values are paths to the data within the request or response body.
   */
  fieldPaths?: { [key: string]: AiStatisticsPathField };
  /**
   * @remarks
   * The API endpoint path to which this configuration applies, such as /user/id.
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
   * Specifies whether to record the body of incoming requests.
   */
  logRequestContent?: boolean;
  /**
   * @remarks
   * Specifies whether to record the body of outgoing responses.
   */
  logResponseContent?: boolean;
  /**
   * @remarks
   * An array of configurations for extracting data from specific paths.
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

