// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterSetRelationResponseBodyParameterSets extends $dara.Model {
  /**
   * @example
   * 2022-05-14T10:05:19Z
   */
  createTime?: string;
  /**
   * @example
   * 123111
   */
  description?: string;
  /**
   * @example
   * alb_enable_ipv6_4.2
   */
  name?: string;
  /**
   * @example
   * pts-kw1b11jlssrabb638ptums
   */
  parameterSetId?: string;
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationResponseBody extends $dara.Model {
  parameterSets?: ListParameterSetRelationResponseBodyParameterSets[];
  /**
   * @example
   * 2F24E990-E8D3-5C18-ABEA-C7A3F1831C57
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      parameterSets: 'parameterSets',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSets: { 'type': 'array', 'itemType': ListParameterSetRelationResponseBodyParameterSets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSets)) {
      $dara.Model.validateArray(this.parameterSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

