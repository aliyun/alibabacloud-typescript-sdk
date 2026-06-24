// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComponentIndexRequestTemplate extends $dara.Model {
  /**
   * @remarks
   * The aliases configuration of the template.
   * 
   * @example
   * {}
   */
  aliases?: { [key: string]: any };
  /**
   * @remarks
   * The mappings configuration of the template.
   * 
   * @example
   * { "properties": { "@timestamp": { "type": "date" } } }
   */
  mappings?: { [key: string]: any };
  /**
   * @remarks
   * The settings configuration of the template.
   * 
   * @example
   * { "index.number_of_replicas": 0 }
   */
  settings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.aliases) {
      $dara.Model.validateMap(this.aliases);
    }
    if(this.mappings) {
      $dara.Model.validateMap(this.mappings);
    }
    if(this.settings) {
      $dara.Model.validateMap(this.settings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComponentIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata, which is used to store information such as remarks.
   * 
   * @example
   * { "description": "set number of shards to one" }
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The composable template information.
   */
  template?: UpdateComponentIndexRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: UpdateComponentIndexRequestTemplate,
    };
  }

  validate() {
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

