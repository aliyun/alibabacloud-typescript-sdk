// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataAgentApplicationAgreement extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the agreement in ISO 8601 UTC string format. This field is omitted if the agreement is unsigned. The agreement expires when this time is reached. The default validity period is 10 calendar years from the signing date.
   * 
   * @example
   * 2036-11-23T08:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The region of the workspace to which the agreement belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The signing time in ISO 8601 UTC string format. This field is omitted if the agreement is unsigned. Repeated signing within the validity period retains the original time, and re-signing after expiration updates the time.
   * 
   * @example
   * 2026-11-23T08:00:00Z
   */
  signedAt?: string;
  /**
   * @remarks
   * The agreement status. Valid values: NOT_SIGNED (unsigned), EXPIRED (expired), and SIGNED (signed and valid). Both NOT_SIGNED and EXPIRED are business statuses returned upon a successful query.
   * 
   * @example
   * SIGNED
   */
  status?: string;
  /**
   * @remarks
   * The stable identifier of the workspace to which the agreement belongs.
   * 
   * @example
   * 62q1xxxxxxxxxxxxxxxxxxx0
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'ExpiresAt',
      regionId: 'RegionId',
      signedAt: 'SignedAt',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      regionId: 'string',
      signedAt: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

