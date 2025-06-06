// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceThumbnail extends $dara.Model {
  /**
   * @example
   * Cluster-e3b7fb52-22b3-44f2-9746-8c1804bd6af0
   */
  faceGroupId?: string;
  /**
   * @example
   * a9a66a86-73dd-4c95-8b79-1d8a49db5226
   */
  faceId?: string;
  /**
   * @example
   * https://pds-domain.region.aliyuncs.com/QieGeH98%2F1001%2F63e5e551ee621482ab934a0687c6cda75fc07864%2F642a8a40c00f1ad379df421694713ee65170f09b?security-token=CAIS%2BgF1q6Ft5B2yfSjIr5bjHPCNnrdR8aSaSW7woVlmVd1Bt5HorDz2IHpPfHdoBe0btvU%2BlWxX6fwZlq5rR4QAXlDfNSyFeX20qFHPWZHInuDox55m4cTXNAr%2BIhr%2F29CoEIedZdjBe%2FCrRknZnytou9XTfimjWFrXWv%2Fgy%2BQQDLItUxK%2FcCBNCfpPOwJms7V6D3bKMuu3OROY6Qi5TmgQ41En1DIlt%2FXuk5DCtkqB12eXkLFF%2B97DRbG%2FdNRpMZtFVNO44fd7bKKp0lQLsUMSqv8q0fEcqGaW4o7CWQJLnzyCMvvJ9OVDFyN0aKEnH7J%2Bq%2FzxhTPrMnpkSlacGoABPMvZ8rSESUEP96Vbf%2Bk0JRg9Qb1MnaIJqWAgo8K6K0UP1CtqL2zrUtugpKKDHOYiKbq2O0S5yLUPVX5vBHqEi%2FFc7i6ZnHCMcXLJs4rKDKwRBEhovUXXlklq2q43OSVtLrXkBy9Xs1ers%2FhJhcxpNA0Vl3EWfJxa2BTylEdnLOQ%3D&x-oss-access-key-id=STS.NUVWJ9shpFfqKHAEY3YRmXTCN&x-oss-expires=1686455451&x-oss-process=image%2Fcrop%2Cx_1128%2Cy_1211%2Cw_914%2Ch_914%2Fformat%2Cjpg&x-oss-signature=jmhOz91Tww1ciMEwadDiioU7d93FDiBNr8s8mHyMqW0%3D&x-oss-signature-version=OSS2
   * 
   * @deprecated
   */
  faceThumbnail?: string;
  static names(): { [key: string]: string } {
    return {
      faceGroupId: 'face_group_id',
      faceId: 'face_id',
      faceThumbnail: 'face_thumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGroupId: 'string',
      faceId: 'string',
      faceThumbnail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

