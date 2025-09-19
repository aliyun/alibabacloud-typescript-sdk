// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityEventMarkMissIndividuallyRequest extends $dara.Model {
  /**
   * @remarks
   * The alert handling rule that you want to delete.
   * 
   * @example
   * [{\\"field\\":\\"loginSourceIp\\",\\"operate\\":\\"contains\\",\\"eventType\\":\\"SIL_AI_ALERT\\",\\"eventName\\":\\"login_common_ip\\",\\"fieldValue\\":\\"10.12.XX.XX\\",\\"uuids\\":\\"\\"}]
   */
  deleteMarkMissParam?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The alert handling that you want to add.
   * 
   * @example
   * [{\\"field\\":\\"location\\",\\"operate\\":\\"contains\\",\\"eventType\\":\\"SIL_AI_ALERT\\",\\"eventName\\":\\"login_common_ip\\",\\"fieldValue\\":\\"xx\\",\\"uuids\\":\\"4296ee47-bf19-4fa4-a4a6-6bxxxxxxxxx\\"}]
   */
  insertMarkMissParam?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 127.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMarkMissParam: 'DeleteMarkMissParam',
      from: 'From',
      insertMarkMissParam: 'InsertMarkMissParam',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMarkMissParam: 'string',
      from: 'string',
      insertMarkMissParam: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

