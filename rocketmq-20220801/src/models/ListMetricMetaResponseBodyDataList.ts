// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetricMetaResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Monitoring item tag
   * 
   * @example
   * Bug
   */
  category?: string;
  /**
   * @remarks
   * Monitoring item description
   * 
   * @example
   * Using Serverless Devs to deploy the infrastructure of project:get-userinfo-v1-infrastructure-as-template-project
   */
  description?: string;
  /**
   * @remarks
   * Monitoring item name
   * 
   * @example
   * SendMessageCountPerInstance
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      metricName: 'metricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      metricName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

