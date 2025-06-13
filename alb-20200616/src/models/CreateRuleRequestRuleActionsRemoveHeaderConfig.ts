// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRuleRequestRuleActionsRemoveHeaderConfig extends $dara.Model {
  /**
   * @remarks
   * The keys of the headers to be removed. The header keys must be 1 to 40 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The header keys specified in RemoveHeader must be unique.
   * 
   * *   If Direction is set to Request, the following request headers cannot be removed: `slb-id`, `slb-ip`, `x-forwarded-for`, `x-forwarded-proto`, `x-forwarded-eip`, `x-forwarded-port`, `x-forwarded-client-srcport`, `connection`, `upgrade`, `content-length`, `transfer-encoding`, `keep-alive`, `te`, `host`, `cookie`, `remoteip`, `authority`, and `x-forwarded-host`. Request headers are not case-sensitive.
   * *   If Direction is set to Response, the following response header keys are not supported: `connection`, `upgrade`, `content-length`, and `transfer-encoding`. The header keys are not case-sensitive.
   * 
   * @example
   * test
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

