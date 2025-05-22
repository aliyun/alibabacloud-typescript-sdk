// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6DEA36EF-C97D-5658-A4AC-4F5DB08D1A89
   */
  requestId?: string;
  /**
   * @remarks
   * The resource details.
   * 
   * @example
   * [{\\"LogicalResourceIdPattern\\": \\"wait1\\", \\"ResourceType\\": \\"time_sleep\\", \\"ResourcePath\\": \\"wait1\\"}, {\\"LogicalResourceIdPattern\\": \\"wait2\\", \\"ResourceType\\": \\"time_sleep\\", \\"ResourcePath\\": \\"wait2\\"}]
   */
  resources?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.resources) {
      $dara.Model.validateMap(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

