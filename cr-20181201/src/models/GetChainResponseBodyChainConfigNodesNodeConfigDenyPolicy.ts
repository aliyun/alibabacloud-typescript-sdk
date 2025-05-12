// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy extends $dara.Model {
  /**
   * @example
   * BLOCK
   */
  action?: string;
  /**
   * @example
   * identification,hc_image_exploit
   */
  baselineList?: string;
  /**
   * @example
   * 10
   */
  issueCount?: string;
  /**
   * @example
   * HIGH
   */
  issueLevel?: string;
  /**
   * @example
   * CVE-2020-8286,CVE-2020-8285
   */
  issueList?: string;
  /**
   * @example
   * AND
   */
  logic?: string;
  /**
   * @example
   * mutate_cockhorse,abnormal_program
   */
  maliciousList?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      baselineList: 'BaselineList',
      issueCount: 'IssueCount',
      issueLevel: 'IssueLevel',
      issueList: 'IssueList',
      logic: 'Logic',
      maliciousList: 'MaliciousList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      baselineList: 'string',
      issueCount: 'string',
      issueLevel: 'string',
      issueList: 'string',
      logic: 'string',
      maliciousList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

