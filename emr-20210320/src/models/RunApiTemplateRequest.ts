// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunApiTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * A7D960FA-6DBA-5E07-8746-A63E3E4D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The cluster template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * AT-****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      clientToken: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

