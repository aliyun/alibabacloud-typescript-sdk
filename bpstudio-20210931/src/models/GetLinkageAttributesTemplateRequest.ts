// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLinkageAttributesTemplateRequestInstances extends $dara.Model {
  /**
   * @example
   * vpc-**1q56**taq40*****
   */
  id?: string;
  /**
   * @example
   * vpc
   */
  nodeName?: string;
  /**
   * @example
   * vpc
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLinkageAttributesTemplateRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  instances?: GetLinkageAttributesTemplateRequestInstances[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ${instance_type}
   */
  targetVariable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * XFKR6WYRVS24S07R
   */
  templateId?: string;
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      instances: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      targetVariable: 'TargetVariable',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      instances: { 'type': 'array', 'itemType': GetLinkageAttributesTemplateRequestInstances },
      maxResults: 'number',
      nextToken: 'string',
      targetVariable: 'string',
      templateId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

