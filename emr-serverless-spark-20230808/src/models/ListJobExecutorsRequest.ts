// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsRequest extends $dara.Model {
  /**
   * @example
   * driver
   */
  executorType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Dead
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      executorType: 'executorType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regionId: 'regionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

