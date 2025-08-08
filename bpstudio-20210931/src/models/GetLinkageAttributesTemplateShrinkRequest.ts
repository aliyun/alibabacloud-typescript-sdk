// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLinkageAttributesTemplateShrinkRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  instancesShrink?: string;
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
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      instancesShrink: 'Instances',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      targetVariable: 'TargetVariable',
      templateId: 'TemplateId',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      instancesShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      targetVariable: 'string',
      templateId: 'string',
      variablesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

