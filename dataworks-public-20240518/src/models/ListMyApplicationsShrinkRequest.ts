// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyApplicationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute
   */
  defSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1779724799999
   */
  endTime?: number;
  /**
   * @example
   * eyJpZCI6MTIzfQ==
   */
  nextToken?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceTypeShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1771948800000
   */
  startTime?: number;
  statusesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      defSchema: 'DefSchema',
      endTime: 'EndTime',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      resourceShrink: 'Resource',
      resourceTypeShrink: 'ResourceType',
      startTime: 'StartTime',
      statusesShrink: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defSchema: 'string',
      endTime: 'number',
      nextToken: 'string',
      pageSize: 'number',
      resourceShrink: 'string',
      resourceTypeShrink: 'string',
      startTime: 'number',
      statusesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

