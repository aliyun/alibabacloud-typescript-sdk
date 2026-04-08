// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiStatisticsPathField } from "./AiStatisticsPathField";


export class AiStatisticsConfigPathFieldConfigs extends $dara.Model {
  fieldPaths?: { [key: string]: AiStatisticsPathField };
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
  logRequestContent?: boolean;
  logResponseContent?: boolean;
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

