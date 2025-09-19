// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCreateVulWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The reason why you add the vulnerability to the whitelist.
   * 
   * @example
   * This vulnerability is not harmful
   */
  reason?: string;
  /**
   * @remarks
   * The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: the type of the applicable scope. Valid values:
   * 
   *     *   **GroupId**: the ID of a server group.
   *     *   **Uuid**: the UUID of a server.
   * 
   * *   **uuids**: the UUIDs of servers. This field is of the string type.
   * 
   * *   **groupIds**: the IDs of server groups. This field is of the long type.
   * 
   * >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
   * 
   * @example
   * {"type":"Uuid","uuids":["b31a708f-5fea-426e-bebe-a7b0893****","1f749687-3b5d-4e11-8140-d964673****"],"groupIds":[]}
   */
  targetInfo?: string;
  /**
   * @remarks
   * The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
   * 
   * *   **Status**: the status of the vulnerability.
   * 
   * *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
   * 
   * *   **LaterCount**: the number of vulnerabilities that have the medium priority.
   * 
   * *   **AsapCount**: the number of vulnerabilities that have the high priority.
   * 
   * *   **Name**: the name of the vulnerability.
   * 
   * *   **Type**: the type of the vulnerability. Valid values:
   * 
   *     *   **cve**: Linux software vulnerability
   *     *   **sys**: Windows system vulnerability
   *     *   **cms**: Web-CMS vulnerability
   *     *   **app**: application vulnerability
   *     *   **emg**: urgent vulnerability
   * 
   * *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
   * 
   * *   **HandledCount**: the number of handled vulnerabilities.
   * 
   * *   **AliasName**: the alias of the vulnerability.
   * 
   * *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
   * 
   * *   **NntfCount**: the number of vulnerabilities that have the low priority.
   * 
   * *   **TotalFixCount**: the total number of fixed vulnerabilities.
   * 
   * *   **Tags**: the tag that is added to the vulnerability.
   * 
   * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Status":0,"GmtLast":1662281929000,"LaterCount":0,"AsapCount":1,"Name":"oval:com.redhat.rhsa:def:20172836","Type":"cve","Related":"CVE-2017-14491,CVE-2017-14492,CVE-2017-14493,CVE-2017-14494,CVE-2017-14495,CVE-2017-14496","HandledCount":1,"AliasName":"RHSA-2017:2836-Critical: dnsmasq security update","RuleModifyTime":1535542395000,"NntfCount":0,"TotalFixCount":196668,"Tags":"Exploit Exists,Code Execution"},{"Status":0,"GmtLast":1662281933000,"LaterCount":0,"AsapCount":1,"Name":"oval:com.redhat.rhsa:def:20173075","Type":"cve","Related":"CVE-2017-13089,CVE-2017-13090","HandledCount":1,"AliasName":"RHSA-2017:3075-Important: wget security update","RuleModifyTime":1551432867000,"NntfCount":0,"TotalFixCount":369136,"Tags":"Code Execution"}]
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      targetInfo: 'TargetInfo',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      targetInfo: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

