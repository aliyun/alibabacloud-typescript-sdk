// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageEntityVO } from "./LineageEntityVo";


export class LineageRelationRegisterTaskVO extends $dara.Model {
  attributes?: { [key: string]: string };
  /**
   * @example
   * 1684327487964
   */
  createTimestamp?: number;
  inputEntities?: LineageEntityVO[];
  /**
   * @example
   * pai-task name
   */
  name?: string;
  outputEntities?: LineageEntityVO[];
  /**
   * @example
   * pai_dlcjob-task.12304
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTimestamp: 'CreateTimestamp',
      inputEntities: 'InputEntities',
      name: 'Name',
      outputEntities: 'OutputEntities',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createTimestamp: 'number',
      inputEntities: { 'type': 'array', 'itemType': LineageEntityVO },
      name: 'string',
      outputEntities: { 'type': 'array', 'itemType': LineageEntityVO },
      qualifiedName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.inputEntities)) {
      $dara.Model.validateArray(this.inputEntities);
    }
    if(Array.isArray(this.outputEntities)) {
      $dara.Model.validateArray(this.outputEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

