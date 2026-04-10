// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSandboxTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceName?: string;
  /**
   * @example
   * None
   */
  maxResults?: number;
  /**
   * @example
   * gAAAAABo-D-ze1Zog63nWMa8eDDMkqUoBB5-FDsHDUMiNIDSDZeP9g0LwJEozulOPG_LbsGwLRgmDFvTHZeSU90YsukT0pHtnA==
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * code-interpreter
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

